import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loggedIn, loggedOut } from "../features/userSlice";
//useSelector is used for getting data.

const Navbar = () => {
  //here state is entire store in which we are accessing cart property from store reducer

  const dispatch = useDispatch();
  const { amount } = useSelector((state) => state.cart);
  const { isLoged } = useSelector((state) => state.user);
  return (
    <nav>
      <div className="nav-center">
        <h3>Navbar</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
            {!isLoged ? (
              <button onClick={() => dispatch(loggedIn())}>Log In</button>
            ) : (
              <button onClick={() => dispatch(loggedOut())}> Log Out</button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
