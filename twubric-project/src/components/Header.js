import { Card } from 'react-bootstrap'
import { Button, Nav } from 'react-bootstrap'
import Logo from '../twubric.png';
const Header = ({ sortByScore, sortByFriends, sortByInfluence, sortBycChirpiness }) => {
  return (
    <>
      <Card className="text-center bg-dark text-white" >
        <Nav>
          <img src={Logo} alt="logo" width="200" height="100" className="d-inline-block align-text-top ml-1" />
          <div className='d-flex justify-content-end '>
            <Button className='btn btn-light m-3' onClick={sortByScore}>Twubric Score</Button>
            <Button className='btn btn-light m-3' onClick={sortByFriends}>Friends</Button>
            <Button className='btn btn-light m-3' onClick={sortByInfluence}>Influence</Button>
            <Button className='btn btn-light m-3' onClick={sortBycChirpiness}>Chirpiness</Button>
          </div>

        </Nav>
        <div className="date-class">
          <label for="startDate" className="m-3">Start Date:</label>
          <input type="date" id="startDate" placeholder="YYYY-MM-DD" />
          <label for="endDate" className="m-3">End Date:</label>
          <input type="date" id="endDate" placeholder="YYYY-MM-DD" />
        </div>
        <Card.Text>Followers List</Card.Text>
      </Card>
    </>
  )
};
export default Header;
