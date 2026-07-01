// src/App.jsx
import AlertButton from './components/AlertButton'; // 1. 컴포넌트 가져오기(import)

function App() {
  return (
    <div>
      <h1>Welcome to the React Sandbox</h1>
      {/* 2. 커스텀 HTML 태그처럼 사용 + Props로 각각 다른 텍스트 전달 */}
      <AlertButton text="Save Article" />
      <AlertButton text="Delete" />
      <AlertButton text="Publish Now" />
    </div>
  );
}

export default App;
