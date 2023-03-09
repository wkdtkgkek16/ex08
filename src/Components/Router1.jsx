import React from 'react'
import { NavLink, Route, Switch, withRouter } from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'
import Join from './Join'
import Login from './Login'
import Products from './Products'

const Router1 = ({history}) => {
    const activeStyle={
        color: 'black'
        
    }
    const onLogout = (e) => {
        e.preventDefault();
        sessionStorage.removeItem('email');
        history.push('/');
    }
  return (
    <div>
        <div className='menu'>
            <NavLink to="/" activeStyle={activeStyle} exact={true}>Home</NavLink>
            <NavLink to="/products" activeStyle={activeStyle}>상품검색</NavLink>
            {sessionStorage.getItem('email') &&
                <NavLink to="/cart">장바구니</NavLink>
            }
            {sessionStorage.getItem('email') ? 
            <NavLink to="#" onClick={onLogout}>로그아웃</NavLink> :
            <NavLink to="/login">로그인</NavLink>
          }
          {sessionStorage.getItem('email') && 
          <span>{sessionStorage.getItem('email')}님</span>}
        </div>
        <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/products" component={Products}/>
            <Route path="/login" component={Login}/>
            <Route path="/join" component={Join}/>
            <Route path="/cart" component={Cart}/>
            <Route render={({location})=>
                <h1>{location.pathname}존재하지 않는 페이지입니다.</h1>}/>
        </Switch>
    </div>
  )
}

export default withRouter(Router1)