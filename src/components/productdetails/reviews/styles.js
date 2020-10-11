import styled from "styled-components"
 export const ReviewsWrapper = styled.div.attrs({
  className: " "
})`
& .ant-comment-content-author-name {font-weight:bold;font-size:14px;}
& .ant-comment-content-author-time{padding-left:45%;} 
` 
export const Rates = styled.div.attrs({
  className: " "
})`
float: right;
    position: absolute;
    right: 0; 
    top: -12px;
    & .ant-rate-star{font-size:12px;}
` 
export const AddReviewsButton = styled.div.attrs({
  className: "btn rounded-full text-white my-3 mb-4"
})` 
    background: #212b46;
     font-size:13px;
     border-radius: 20px; padding:10px 20px;
`

