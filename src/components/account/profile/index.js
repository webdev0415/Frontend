import React from "react" 
import { Row, Col } from 'antd';
import { Avatar } from 'antd';  
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Upload, Modal  } from 'antd'; 
import ImgCrop from 'antd-img-crop';
import {
	ProfileWrapper,
	Title,
	Text 
} from "./styles"
import {useSelector} from "react-redux"

const Profile = () => {
	const [previewVisible, setPreviewVisible] = React.useState(false)
	const [previewImage, setPreviewImage] = React.useState('')
	const [previewTitle, setPreviewTitle] = React.useState('')
	let first_name, last_name, verified, email, type, registered
	let initList=[]
	const data = useSelector(state=>state.auth.userprofile.user)
	console.log("user data", data)
	if (data!==undefined) {
		first_name = data.first_name
		last_name = data.last_name
		verified = data.verified
		email = data.email
		type = data.type
		registered = data.registered
		if (data.user_image!==null) {
			initList=[
			{
				uid: '-1',
				url: data.user_image
			}
			]
		}
	}

	const [fileList, setFileList] = React.useState(initList)
	
	const getBase64 = file => {
	  return new Promise((resolve, reject) => {
	    const reader = new FileReader();
	    reader.readAsDataURL(file);
	    reader.onload = () => resolve(reader.result);
	    reader.onerror = error => reject(error);
	  });
	}
	const handlePreview = async file => {
	    if (!file.url && !file.preview) {
	      file.preview = await getBase64(file.originFileObj);
	    }
	    setPreviewImage(file.url || file.preview)
	    setPreviewVisible(true)
	    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))

	};
	const onChange = ({ fileList: newFileList }) => {
	    setFileList(newFileList);
	};
	const handleCancel = () => setPreviewVisible(false)

	const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
	return (
		<ProfileWrapper>
		<Row> 
    <Col span={1}> </Col>  
    <Col span={4}>
    <ImgCrop shape="round" rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={handlePreview}
      >
        {fileList.length < 1 && '+ Upload'}
      </Upload>
      
    </ImgCrop>
    <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}
        >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
	</Col>  <Col span={6}><br/>
    <Title>{first_name + ' ' + last_name} <Avatar size={40} src="https://via.placeholder.com/150" /></Title>
	<Text>{email} {!verified && <CheckCircleIcon style={{ color: 'green' }}/>}
</Text>
	</Col>  <Col span={4}>   </Col>
    <Col span={8}><br/>
     Member Since: {registered}<br/>
	 Account Type: {type}<br/>
	 Verification Status: {verified ? "Verified" : "Not verified"}
    </Col>
  </Row>
		</ProfileWrapper>
		)
	
}
export default Profile
 