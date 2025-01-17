import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "business",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title:
        "Julian Assange: Wikileaks founder in last-ditch bid to avoid US extradition",
      description:
        "The Wikileaks founder is trying to overturn an extradition order signed in 2022 by then UK home secretary Priti Patel.",
      url: "https://www.bbc.co.uk/news/uk-68343097",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/358D/production/_132690731_jassange.jpg",
      publishedAt: "2024-02-20T02:37:13.796475Z",
      content:
        "Lawyers for Julian Assange are launching what could be his final bid to avoid extradition to the US to face trial over leaking military secrets.\r\nThe two-day hearing at the High Court in London is du… [+2472 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title:
        "Avdiivka: Russia accused of executing prisoners of war after Ukraine withdraws",
      description:
        "The BBC speaks to relatives after video shows bodies of soldiers who are believed to have surrendered.",
      url: "https://www.bbc.co.uk/news/world-europe-68338550",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/E811/production/_132690495_4ee0ef20-f81e-4e46-9166-76b508caccd1.jpg",
      publishedAt: "2024-02-20T01:22:17.7457306Z",
      content:
        "Last week, Ukrainian forces surrendered the eastern city of Avdiivka, which they had for months been desperately defending against a brutal Russian onslaught. \r\nThe conquest of Avdiivka represents a … [+6437 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title: "Nebraska zoo extracts 70 coins from white alligator's stomach",
      description:
        "The zoo found the coins during a routine examination and urged visitors not to throw coins into exhibits.",
      url: "https://www.bbc.co.uk/news/world-us-canada-68344800",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/2A9D/production/_132690901_coins.jpg",
      publishedAt: "2024-02-20T00:37:18.9176531Z",
      content:
        "An alligator at a US zoo had to undergo surgery after veterinarians discovered 70 coins in the animal's stomach. \r\nThe coins were found in a rare, 36-year-old leucistic alligator, which has transluce… [+1928 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title:
        "Crew abandon British-registered cargo ship off Yemen after Houthi attack",
      description:
        'The UK-registered Rubymar, which is carrying "very dangerous" fertiliser, has been taking on water.',
      url: "https://www.bbc.co.uk/news/world-middle-east-68337027",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/FEEA/production/_132685256_0dab03d5fdba2f2ccbda1de9be29c48be565852a.jpg",
      publishedAt: "2024-02-20T00:37:18.2303234Z",
      content:
        "The crew of a Belize-flagged, British-registered cargo vessel have abandoned ship off Yemen after it was hit by missiles fired by the Houthi movement.\r\nThe Rubymar was in the Gulf of Aden and nearing… [+6613 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title:
        "Israeli PM 'missed chance' to cut off Hamas cash, says ex-spy chief",
      description:
        "Former spy chief tells BBC that Benjamin Netanyahu didn't act on advice to hit the group's money streams.",
      url: "https://www.bbc.co.uk/news/world-middle-east-68318856",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/501B/production/_132670502_index_hamas_funding_v3-nc.png",
      publishedAt: "2024-02-20T00:37:15.9808862Z",
      content:
        "Israel's prime minister missed the chance to starve Hamas of cash, years before its murderous attack last October, according to a former senior Israeli intelligence officer. \r\nUdi Levy has told BBC P… [+9594 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title:
        "Alexei Navalny's body to be held for two weeks for 'chemical analysis', family told",
      description:
        "The wife of the dead Putin critic says Russian authorities are waiting until nerve agent traces disappear.",
      url: "https://www.bbc.co.uk/news/world-europe-68344582",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/902D/production/_132690963_denmarkre.jpg",
      publishedAt: "2024-02-20T00:37:12.8549775Z",
      content:
        'The family of Alexei Navalny, the Putin critic who died in a Russian prison, have reportedly been told his body will not be released for two weeks. \r\nHis mother was informed it was being held for "ch… [+2811 chars]',
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title: "Man admits to rape, murder of US tourist in Germany",
      description:
        "The American man lured two US women off a trail near Germany's famous Neuschwanstein Castle last year.",
      url: "https://www.bbc.co.uk/news/world-us-canada-68344206",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/B4E5/production/_132690364_gettyimages-1258741883.jpg",
      publishedAt: "2024-02-19T21:07:22.2933446Z",
      content:
        "A US man has confessed to raping and killing a fellow American tourist near Germany's famed Neuschwanstein Castle last June.\r\nTroy Philipp B faces several charges, including one count of murder over … [+2221 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title:
        "Powerball: US man sues lottery after being told $340m win is error",
      description:
        '"I know the justice system will prevail," he says - but the lottery claims to have posted his numbers in error.',
      url: "https://www.bbc.co.uk/news/world-us-canada-68343150",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/16F39/production/_132690049_gettyimages-1439854726.jpg",
      publishedAt: "2024-02-19T19:52:14.4459129Z",
      content:
        'A Washington DC man who thought he won a jackpot worth $340m (£270m) has sued Powerball and the DC Lottery, who claim they published his numbers by mistake.\r\nJohn Cheeks said he felt "numb" when he f… [+2701 chars]',
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title: "Huge water leak shoots into air on Texas street",
      description:
        "Dramatic video shows the leak towering close to power lines blocking a road in College Station, Texas.",
      url: "https://www.bbc.co.uk/news/world-us-canada-68342272",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/B6C4/production/_132688764_p0hcv80l.jpg",
      publishedAt: "2024-02-19T16:37:24.0855271Z",
      content:
        "Police in Texas have released dramatic footage of a water leak shooting into the air with such force it towers above trees.\r\nThe road was closed on Sunday in the city of College Station but authoriti… [+91 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "BBC News",
      title: "Minnesota shooting: Two police and a medic killed",
      description:
        "A lengthy standoff at a family home leaves three first responders dead - as well as the attacker.",
      url: "https://www.bbc.co.uk/news/world-us-canada-68336601",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/5044/production/_132684502_victims_index_reuters.jpg",
      publishedAt: "2024-02-19T11:07:21.8199873Z",
      content:
        "Minnesota police say two officers and a paramedic have been killed in a shooting at a family home. \r\nThe gunman, who was barricaded inside his Burnsville home with seven children, opened fire as offi… [+2384 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      total: 0,
      loading: true
    };
     
  }
  async componentDidMount() {
    this.props.setProgress(30);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=11f806c2da054911a0c81c5951518e62&pagesize=${this.props.pageSize}&page=${this.state.page}`;
    // let url=`https://saurav.tech/NewsAPI/top-headlines/category/${this.props.category}/in.json`;
    let data = await fetch(url);
    this.props.setProgress(50);
    let parseddata = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parseddata.articles,
      total: parseddata.totalResults,
      page: 1,
      loading: false,
    });
    this.props.setProgress(100); 
    document.title=`${this.capitalizefirstletter(this.props.category)}-News`;  

  }
   
  fetchMoreData = async() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=11f806c2da054911a0c81c5951518e62&pagesize=${
      this.props.pageSize
    }&page=${this.state.page + 1}`;
   //this.setState({ loading: true });
   let data = await fetch(url);
   let parseddata = await data.json();
   this.setState({
     articles: this.state.articles.concat(parseddata.articles),
     page: this.state.page + 1,
     //loading: false,
    });
    
  };

  capitalizefirstletter=(word)=>{
    const capitalized =word.charAt(0).toUpperCase()+ word.slice(1);
    return capitalized;
  } 
  render() {
    return (<>
        {this.state.loading && <Spinner />}
        {<h1 style={{textAlign: "center",marginTop:"50px"}}>Today's Top {this.capitalizefirstletter(this.props.category)} Headlines</h1>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={Math.floor(this.state.total / (this.state.page * this.props.pageSize))!==0?1:0}
          loader={<Spinner/>}
        >
        <div className="container">
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col 3" key={element.url}>
                {!this.state.loading && (
                  <NewsItem
                    title={element.title}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : element.description
                        
                    }
                    date={element.publishedAt}
                    Imageurl={element.urlToImage}
                    url={element.url}
                  />
                )}
              </div>
                
            );
          })}
         </div>
         </div>
         </InfiniteScroll>
         </>
    );
  }
}
export default News;
