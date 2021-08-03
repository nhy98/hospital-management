import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles,withStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
  Typography,
  ListItem,
  ListItemIcon,
  ListItemText,
  List
} from '@material-ui/core';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {}
}));

const ButtonCustom = withStyles({
  root: {
    background: 'linear-gradient(to top, #003366 0%, #9900ff 70%)',
    fontSize:13+'px',
    color: "white",
    '&:hover': {
      color:'white',
      boxShadow: '5px 5px 5px #ba87e0',
    },
    marginLeft: 10+'px'
  },
  
})(Button);

const AccountDetails = props => {
  const { className, hospital, ...rest } = props;

  const classes = useStyles();

  const [values, setValues] = useState({
    firstName: 'Shen',
    lastName: 'Zhi',
    email: 'shen.zhi@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };



  const history = useHistory();

  const handleListDoctors = (event,id) => {
        history.push("/doctors/"+id);
    }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          subheader="The information is confirmed by hospital administrator"
          title="Hospital Information"
        />
        <Divider />
        <CardContent>
            <Typography
              variant="h5"
            >
              I.    General
            </Typography>
            <Typography
              variant="body2"
            >
              Tiền thân là Viện Y học lâm sàng các bệnh Nhiệt đới, qua 13 năm phát triển, Bệnh viện Bệnh Nhiệt đới trung ương đã lớn mạnh cả về lượng và chất. Từ 1 tòa nhà 120 giường bệnh ban đầu đến nay Bệnh viện đã phát triển thành 2 cơ sở (tại 78 Giải Phóng, Hà Nội và tại Thôn Bầu xã Kim Chung, huyện Đông Anh, Hà Nội) Năm 2014 cơ sở Kim Chung bắt đầu được đưa vào hoạt động. Ngày 26/06/2018, Bộ Y tế đã ra chính thức cấp giấy phép hoạt động khám chứa bệnh đa khoa cho cơ sở Kim Chung. Hiện nay, với 25 Khoa phòng và 01 Viện Đào tạo bệnh truyền nhiễm và Nhiệt đới, bệnh viện là cơ sở khám bệnh, chữa bệnh đa khoa với mũi nhọn chuyên sâu về các bệnh truyền nhiễm và nhiệt đới, có cơ sở vật chất, trang thiết bị hiện đại ngang tầm các nước tiên tiến trong khu vực và trên thế giới. Với định hướng phát triển đa khoa, bệnh viện đã từng bước hình thành và phát triển các chuyên khoa Ngoại, Sản, Nhi, Tai Mũi Họng, Răng Hàm Mặt, Mắt, Nội Tổng hợp…
            </Typography>
            
            <Typography
              variant="h5"
            >
              II.   Functions
            </Typography>
            <Typography
              variant="body2"
            >
              Tiền thân là Viện Y học lâm sàng các bệnh Nhiệt đới, qua 13 năm phát triển, Bệnh viện Bệnh Nhiệt đới trung ương đã lớn mạnh cả về lượng và chất. Từ 1 tòa nhà 120 giường bệnh ban đầu đến nay Bệnh viện đã phát triển thành 2 cơ sở (tại 78 Giải Phóng, Hà Nội và tại Thôn Bầu xã Kim Chung, huyện Đông Anh, Hà Nội) Năm 2014 cơ sở Kim Chung bắt đầu được đưa vào hoạt động. Ngày 26/06/2018, Bộ Y tế đã ra chính thức cấp giấy phép hoạt động khám chứa bệnh đa khoa cho cơ sở Kim Chung. Hiện nay, với 25 Khoa phòng và 01 Viện Đào tạo bệnh truyền nhiễm và Nhiệt đới, bệnh viện là cơ sở khám bệnh, chữa bệnh đa khoa với mũi nhọn chuyên sâu về các bệnh truyền nhiễm và nhiệt đới, có cơ sở vật chất, trang thiết bị hiện đại ngang tầm các nước tiên tiến trong khu vực và trên thế giới. Với định hướng phát triển đa khoa, bệnh viện đã từng bước hình thành và phát triển các chuyên khoa Ngoại, Sản, Nhi, Tai Mũi Họng, Răng Hàm Mặt, Mắt, Nội Tổng hợp…
            </Typography>
            <Typography
              variant="h5"
            >
              III.  Organization
            </Typography>
            <Typography
              variant="body2"
            >
              Tiền thân là Viện Y học lâm sàng các bệnh Nhiệt đới, qua 13 năm phát triển, Bệnh viện Bệnh Nhiệt đới trung ương đã lớn mạnh cả về lượng và chất. Từ 1 tòa nhà 120 giường bệnh ban đầu đến nay Bệnh viện đã phát triển thành 2 cơ sở (tại 78 Giải Phóng, Hà Nội và tại Thôn Bầu xã Kim Chung, huyện Đông Anh, Hà Nội) Năm 2014 cơ sở Kim Chung bắt đầu được đưa vào hoạt động. Ngày 26/06/2018, Bộ Y tế đã ra chính thức cấp giấy phép hoạt động khám chứa bệnh đa khoa cho cơ sở Kim Chung. Hiện nay, với 25 Khoa phòng và 01 Viện Đào tạo bệnh truyền nhiễm và Nhiệt đới, bệnh viện là cơ sở khám bệnh, chữa bệnh đa khoa với mũi nhọn chuyên sâu về các bệnh truyền nhiễm và nhiệt đới, có cơ sở vật chất, trang thiết bị hiện đại ngang tầm các nước tiên tiến trong khu vực và trên thế giới. Với định hướng phát triển đa khoa, bệnh viện đã từng bước hình thành và phát triển các chuyên khoa Ngoại, Sản, Nhi, Tai Mũi Họng, Răng Hàm Mặt, Mắt, Nội Tổng hợp…
            </Typography>
        </CardContent>
        <Divider />
        <CardActions>
          <ButtonCustom
            variant="contained"
            onClick={event => handleListDoctors(event, hospital.id)}
          >
            Get list doctors
          </ButtonCustom>
        </CardActions>
      </form>
    </Card>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string
};

export default AccountDetails;
