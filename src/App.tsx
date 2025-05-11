import {ConfigProvider, Spin} from "antd";
import {useSnippets} from "./hooks/useSnippets.tsx";
import {CardItem} from "./components/CardItem/CardItem";
import "./index.scss";
import {customTheme} from "./themes/customTheme.ts";

function App() {
  const {snippets, loading, error} = useSnippets();
  //
  if (loading) {
    return (
      <div className="app__spinner">
        <Spin size="large"/>
      </div>
    );
  }

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="app">
      <ConfigProvider theme={customTheme}>
        {snippets.map((snippet) => (
          <CardItem key={snippet.ID} snippetNews={snippet}/>
        ))}
      </ConfigProvider>
    </div>

  );
}

export default App;
