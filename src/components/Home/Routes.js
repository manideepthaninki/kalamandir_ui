
import { Switch, Route } from "react-router";
import LoginPage from "../LoginPage/LoginPage";
import OAuth2RedirectHandler from '../../OAuth/OAuth2RedirectHandler';
import Profile from '../Home/Profile';
import Test from '../Test.js'
import Dashboard from "../Dashboard/Dashboard";
import PromoExchangeItem from "../promo_item_exchange/PromoExchangeItem";
import CreateDeliverySlip from "../CreateDeliverySlip/CreateDeliverySlip";

const  Routes=()=> (

    <Switch>
    {/**<Route exact path="/" component={LoginPage}></Route>
    <Route exact path="/login" component={LoginPage}></Route> */}
    
    
    <Route path="/profile" component={Profile}></Route>
    <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>  
    <Route path="/dashboard" component={Dashboard}></Route>  
    <Route path="/promoexchange" component={PromoExchangeItem}></Route>
    <Route path="/creatDeliverySlip" component={CreateDeliverySlip}></Route>

    </Switch>
);

export default  Routes;