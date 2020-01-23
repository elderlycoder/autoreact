/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-expressions */


const SectionItem = (props) => (
   <div>
      <HeadingItem Text={props.headingText} tagType={props.headingTagType} />
   </div>
)

const HeadingItem = (props) => {
   const Heading = props.tagType

   return <Heading>{props.Text}</Heading>
}

ReactDOM.render(
   <div>
      <SectionItem
         headingText='HTML'
         headingTagType='h1'
      />
   </div>,
   document.getElementById('root')
)