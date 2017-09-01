import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import classNames from 'classnames'
import Header from './../../components/header';
import SideBar from './../../components/SideBar';
import Footer from './../../components/Footer';
import Filter from './../../components/Filter';
import Modal from './../../components/Modal';
import ItemsPanel from './../../components/ItemsPanel';
import ResultsPanel from './../../components/ResultsPanel';

import './Layout.css';


class Layout extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: 'Layout',
      panel: 'items',
      menu: {
        collapsed: false,
      },
    };
    
    this.renderHeader = this.renderHeader.bind(this);
    this.getClassNames = this.getClassNames.bind(this);
  }
  
  getClassNames() {
    const menu = this.state.menu.collapsed;
    
    
    if (menu) { // If collapsed = TRUE
      return classNames('content_wrapper', { collapse: true }, { open: true });
    }
    return classNames('content_wrapper', { open_hidden: true });
  }
  
  renderHeader() {
    const title = this.state.title;
    return (
      <Header title={title} />
    );
  }
  
  renderPanel(){
    
    if(this.state.panel === 'items'){
      return <ItemsPanel/> ;
    }
    return <ResultsPanel className="results__panel"/>
    
  }
  
  render() {
    return (
      <div className="layout">
        <div className="header_wrapper">
          {this.renderHeader()}
        </div>
        <div className={this.getClassNames()}>
          <div className="sidebar_wrapper">
            <SideBar />
          </div>
          <div className="panel_wrapper">
            {this.renderPanel()}
          </div>
          <div className="filter_wrapper">
            <Filter />
          </div>
        </div>
      </div>
    
    );
  }
}


export default Layout;
