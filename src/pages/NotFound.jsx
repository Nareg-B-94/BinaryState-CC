const NotFound = () => {
  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '350px',
  };
  return (
    <div style={divStyle}>
      <h3>404 Page Not Found! please navigate back using the links</h3>
    </div>
  );
};

export default NotFound;
