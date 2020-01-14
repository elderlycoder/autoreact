const express = require("express");
const { Router } = require('express'); // подключаем объект Router (из express) можно так: const express.Router = require('express')
const Order = require('../model/order')
const Contact = require('../model/contacts')
const jsonParser = express.json()
const router = Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({
  extended: false
});


router.get('/', async (req, res) => {
   isOrders = true
   const orders = await Order.find({ userId: req.user })
   res.render("orders", {
      title: 'Страница с заказами',
      orders,
      isOrders
   });
});
// редактирование заказа

router.get('/:id/edit', async (req, res) => {
  const isEditOrder = true;
   if (!req.query.allow) {
     return res.redirect('/orders');
   }
   const order = await Order.findById(req.params.id)
   console.log(order)
   res.render('editorder', {
     title: 'Редактировать заказ',
     order, 
     isEditOrder
     
   })
 });
router.post('/edit', jsonParser, async (req, res) => {
  if (req.body) {
    let id = req.body.orderContactId,
      date = req.body.orderDate,
      desc = req.body.orderDesc,
      countpart = req.body.countpart,
      status = req.body.orderStatus,
      state = req.body.orderState,
      partnames = req.body.partnames;
    //console.log(req.body.id)
    let variants = []
    for (let i = 0; i < partnames.length; i++) {
      let p = partnames[i].variant.length
      for (let k = 0; k < p; k++) {
        variants.push(partnames[i].variant[k])
      }
    }
    await Order.findByIdAndUpdate(req.body.id, {
      idContact: id,
      created: date,
      desc: desc,
      status: status,
      state: state,
      countpart: countpart,
      parts: partnames,
      userId: req.user
    });
    res.redirect('/orders');
  }
})

router.post('/changestatus', jsonParser, async (req, res) => {
  if (req.body) {
    let status = req.body.status
    try {
      await Order.findByIdAndUpdate(req.body.id, {
        status: status,
      })
    } catch (e) {
      console.log(e)
    }
  }
})
router.post('/changestate', jsonParser, async (req, res) => {
  if (req.body) {
    let state = req.body.state
    // console.log(state)
    // console.log(req.body.id)
    try {
      await Order.findByIdAndUpdate(req.body.id, {
        state: state,
      })
    } catch (e) {
      console.log(e)
    }
  }
})

router.post('/statefilter', jsonParser, async (req, res) => {
  isOrders = true
  console.log(req.body.state)
  let state = req.body.state
  const orders = await Order.find({ state: state })
  console.log(orders)
   res.render("orders", {
      title: 'Страница с заказами',
      orders,
      isOrders
   });
});
module.exports = router;