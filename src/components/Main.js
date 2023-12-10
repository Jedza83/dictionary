import Header from "./Header";
import Search from "./Search";
import Keyboard from "./Keyboard";
import Line from "./Line";
import Footer from "./Footer";
import Meaning from "./Meaning";
import Verb from "./Verb";
import VerbMeaning from "./VerbMeaning";
function Main() {
  return (
    <div className="mx-auto max-w-3xl md:my-20 px-5">
      <Header />
      <Search />
      <Keyboard />
      <Line />
      <Meaning />
      <Verb />
      <VerbMeaning />
      <Footer />
    </div>
  );
}

export default Main;
