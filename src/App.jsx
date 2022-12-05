export const App = () => {
  const onClickButton = () => {
    alert("HHH");
  };

  const contentStyle = {
    color: "bluie",
    fontSize: "20px"
  };

  const contentPinkStyle = {
    color: "pink",
    fontSize: "20px"
  };

  return (
    <>
      {console.log("TEST1")}
      <h1 style={{ color: "red" }}>안녕하세요1!</h1>
      <p style={contentStyle}>안녕하세요2!</p>
      <p style={contentPinkStyle}>안녕하세요3!</p>
      <p>잘 지내시죠?</p>
      <button onClick={onClickButton}>버튼</button>
    </>
  );
};
