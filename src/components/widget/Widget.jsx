import React from 'react'
import './Widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
const Widget = ({type}) => {
  let data;

  switch(type){
    case 'users':
      data={
        title:'USERS',
        isMoney:false,
        counter:6547,
        link:'See all users',
        diff:30,
        icon:<PermIdentityOutlinedIcon className='icon' style={{color:'darkorange'}} />
      }
    break;
    case 'orders':
      data={
        title:'ORDERS',
        isMoney:false,
        counter:26442,
        link:'View all orders',
        diff:50,
        isPercentage:true,
        icon:<ShoppingCartOutlinedIcon className='icon' style={{color:'crimson'}} />
      }
    break;
    case 'earnings':
      data={
        title:'EARNINGS',
        isMoney:true,
        counter:23676,
        link:'View net earnings',
        diff:68,
        icon:<MonetizationOnOutlinedIcon className='icon' style={{color:'green'}} />
      }
    break;
    case 'balance':
      data={
        title:'BALANCE',
        isMoney:true,
        counter:821309,
        link:'See details',
        diff:45,
        icon:<AccountBalanceOutlinedIcon className='icon' style={{color:'darkslateblue'}}/>
      }
    break;
    default:
      break;
  }
  //const amount=1000;
  //const different=50;
  return (
    <div className='widget'>
    <div className="left">
      <span className="title">{data.title}</span>
      <span className="counter">{data.isMoney && '$'}{data.counter}</span>
      <span className="link" style={{color:'blue'}}>{data.link}</span>
    </div>
    <div className="right">
      <div className="percentage positive">
      <KeyboardArrowUpIcon/>
        {data.diff}%
        </div>
{data.icon}    
</div>
    </div>
  )
}

export default Widget