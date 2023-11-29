import React from 'react'
import './sidebar.scss'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/Chat';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import RuleFolderOutlinedIcon from '@mui/icons-material/RuleFolderOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';
import FormatAlignRightOutlinedIcon from '@mui/icons-material/FormatAlignRightOutlined';
import TocOutlinedIcon from '@mui/icons-material/TocOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';function Sidebar() {
  return (
    <div className='sidebar'>
    <div className='top'>
        <span className='logo'><GrassOutlinedIcon className='
        icon'/>HomeAdmin</span></div>
    <hr/>
  <div className='center'>
  <ul>
    <p className='title'>MENU</p>
    <li>
    <DashboardCustomizeIcon className='icon'/>
    <span className='span'>Dashboards</span></li>
    <p className='title'>APPs</p>
    <li>
    <CalendarMonthIcon className='icon'/>
    <span className='span'>Calendar</span></li>
    <li>
    <ChatIcon className='icon'/>
        <span className='span'>Chat</span></li>
    <li>
    <DescriptionOutlinedIcon className='icon'/>
        <span className='span'>File Manager</span></li>
    <li>
        <StorefrontOutlinedIcon className='icon'/>
        <span className='span'>Ecommerce</span></li>
    <li>
        <CurrencyBitcoinOutlinedIcon className='icon'/>
        <span className='span'>Crypto</span></li>
    <li>
        <MarkunreadOutlinedIcon className='icon'/>
        <span className='span'>Email</span></li>
    <li>
        <InsertDriveFileOutlinedIcon className='icon'/>
        <span className='span'>Invoices</span></li>
    <li>
        <RuleFolderOutlinedIcon className='icon'></RuleFolderOutlinedIcon>
        <span className='span'>Projects</span></li>
    <li>
        <AssignmentTurnedInOutlinedIcon className='icon'/>
        <span className='span'>Tasks</span></li>
    <li>
        <ContactPhoneOutlinedIcon className='icon'/>
        <span className='span'>Contacts</span></li>
    <li>
        <BookOutlinedIcon className='icon'/>
        <span className='span'>Blog</span></li>
    <li>
        <WorkOutlineOutlinedIcon  className='icon'/>
        <span className='span'>Jobs</span></li>
        <hr/>
        <p className='title'>PAGES</p>
    <li>
    <AccountCircleIcon className='icon'/>
        <span className='span'>Authetication</span></li>
    <li>
        <TextSnippetIcon className='icon'/>
        <span className='span'>Utility</span></li>
    <p className='title'>COMPONENTS</p>
    <li>
        <BuildCircleOutlinedIcon className='icon'/>
        <span className='span'>UI Elements</span></li>
    <li>
        <FormatAlignRightOutlinedIcon className='icon'/>
        <span className='span'>Forms</span></li>
    <li>
        <TocOutlinedIcon className='icon'/>
        <span className='span'>Tables</span></li>
    <li>
        <LeaderboardOutlinedIcon className='icon'/>
        <span className='span'>Charts</span></li>
    <li>
        <ApiOutlinedIcon className='icon'/>
        <span className='span'>Icons</span></li>
    <li>
        <MyLocationOutlinedIcon className='icon'/>
        <span className='span'>Map</span></li>
  </ul>
  </div>
  <hr/>
 

    </div>
  )
}

export default Sidebar