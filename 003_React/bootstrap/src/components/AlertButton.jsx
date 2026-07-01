// src/components/AlertButton.jsx
// props 를 인자로 받아, 버튼마다 다른 텍스트를 표시합니다 (Step 4)
function AlertButton(props) {
  return (
    // 중괄호 { } 로 JavaScript 변수를 JSX 안에 주입
    <button className="custom-btn">
      {props.text}
    </button>
  );
}

export default AlertButton; // 다른 파일들이 이 컴포넌트를 사용할 수 있게 해줌
