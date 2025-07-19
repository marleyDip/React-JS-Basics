// props is like function argument, we use any name... p, pro, prop

//function Header(props) {
//console.log(props.email);
//console.log(props.headerInfo);
//console.log(props.headerInfo.email);
//console.log(props.headerInfo.phone);

// object destructure
//let { headerInfo, cName } = props;
//console.log(headerInfo, cName);

// Now Direct Destructuring instead of props
function Header({ headerInfo, cName }) {
  return (
    <div>
      <h1>Welcome to {cName}</h1>

      <h2>Founder By Md Sofian Hasan.</h2>

      <h3>
        Company: {headerInfo.email} || {headerInfo.phone}
      </h3>

      {/* <h3>
        Company: {props.email} || {props.phone}{" "}
      </h3> */}
    </div>
  );
}

export default Header;
