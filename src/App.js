import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import { Row, Spinner } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import News from './components/News';


function App() {
  const [news, setNews] = useState([]);

  useEffect( () => {
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-11-12&sortBy=publishedAt&apiKey=7874ce2b26564601adbf686937230af0")
      .then(res => res.json())
      .then(data => setNews(data.articles));
  }, [])

  return (
    <div className="App">
    <h3 className="news-text">Today's News</h3>
        {
          news.length === 0 ? 
              <Spinner animation="border" variant="dark" />
          : 
              <Row xs={1} md={3} className="g-4 news-section">
              
                {
                  news.map(singleNews => <News news={singleNews}> </News> )
                }
              </Row>
        }
    </div>
  );
}

export default App;
