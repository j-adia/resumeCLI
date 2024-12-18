import Title from '../components/Title';
import LinkTab from '../components/LinkTab';
import Menu from '../components/Menu';
import Continue from '../components/Continue';

function Home() {
    return (
        <div className="home">
            <Title />
            <LinkTab />
            <Menu />
            <Continue />
        </div>
    );
}

export default Home;
