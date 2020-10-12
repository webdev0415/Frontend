import styled from "styled-components"
 export const MessageBoxWrapper = styled.div.attrs({
  className: "text-center"
})` z-index:99999;width:13%;
  position: fixed;right:10px;bottom:60px;
`
export const MessageBoxtop = styled.div.attrs({
  className: "py-4 px-2"
})`
background: #eee;
    border-radius: 15px 15px 0 0 ; 
    & .MuiSvgIcon-root{font-size:36px;}
`
export const MessageBoxbottom = styled.div.attrs({
  className: ""
})`
background: #ccc;
    border-radius: 0 0 15px 15px; 
`
export const Para = styled.div.attrs({
  className: "my-4 mb-4"
})``
export const ReadMoreButton = styled.div.attrs({
  className: "btn rounded-full text-white my-2"
})` 
    background: #212b46;
     font-size:13px;
    border-radius: 20px; padding:10px 20px;
    
`
export const AddCartButton = styled.div.attrs({
  className: "btn rounded-full text-white my-4 mb-4"
})` 
    background: #212b46;
     font-size:13px;
     border-radius: 20px; padding:10px 20px;
`

