// props is like function argument, we use any name... p, pro, prop

//function Header(props) {
//console.log(props.email);
//console.log(props.headerInfo);
//console.log(props.headerInfo.email);
//console.log(props.headerInfo.phone);

// object destructure
//let { headerInfo, cName } = props;
//console.log(headerInfo, cName);
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopesBulk, faPhone } from "@fortawesome/free-solid-svg-icons";

// Now Direct Destructuring instead of props
function Header({ headerInfo, cName, children }) {
  return (
    <div className="text-center py-10">
      <h1>
        {children} {cName}
      </h1>

      <h2>Founder By Md Sofian Hasan.</h2>

      <h3>
        Company:{" "}
        <FontAwesomeIcon icon={faEnvelopesBulk} className="text-danger" />{" "}
        {headerInfo.email} ||{" "}
        <FontAwesomeIcon icon={faPhone} className="text-danger" />{" "}
        {headerInfo.phone}
      </h3>

      {/* <h3>
        Company: {props.email} || {props.phone}{" "}
      </h3> */}
    </div>
  );
}

export default Header;
