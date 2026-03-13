import Section1 from './components/section1/section1'
import Section2 from './components/section2/section2'
const App = () => {

  const users=[
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1598929214025-d6bb6167d43b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D', 
      intro:'',
      tag:'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', 
      intro:'',
      tag:'UnderBanked'
    },
    {
      img:'https://images.unsplash.com/photo-1541560052-5e137f229371?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D', 
      intro:'',
      tag:'Satisfied'
    },
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
