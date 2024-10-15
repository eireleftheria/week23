import { useParams } from "react-router-dom";

function NewsPage(props) {
  const { id } = useParams();

  const news = props.news.find((item) => item.id === Number(id));

  return (
    <div>
      <p>{news.text}</p>
    </div>
  );
}

export default NewsPage;
