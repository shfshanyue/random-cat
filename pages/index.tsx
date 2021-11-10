import { Helmet } from 'react-helmet'

const Home = () => (
  <div>
    <Helmet
      title="云吸一只猫"
      meta={[{ property: 'og:title', content: '云吸一只猫' }]}
    />
    <img src="https://source.unsplash.com/1600x900/?animal,cat" className="object-cover w-screen h-screen" />
  </div>
)

export default Home
