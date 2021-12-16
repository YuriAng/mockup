import styled from "styled-components";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCalculator, faUser, faCommentDollar, faListUl, faMapMarkerAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


const SidebarStyled = styled.div`
  width: 15em;
  min-height: 100vh;
  background-color: #251c3c;
  color: white;
  grid-column-start: 1;
  ${
    ({isOpen}) => `
    transform: ${!isOpen ? "translateX(-167px)" : "translateX(0px)" };
    transition: ${!isOpen ? "transform 1s ease" : "transform 1s ease" };
    `
  }
`
const Li = styled.li`
  list-style: none;
  padding: 1em 2em;
  border-bottom: 1px solid white;
  margin: 0;
  ${
  ({ isOpen }) => `
    text-align: ${!isOpen ?  "right"  : ""};
     padding: ${!isOpen ? "1em 1.5em": ""} ;
    `
  }

  :hover {
    background-color: #a034b7;
    color: #251c3c;
    border-bottom: none;
    cursor: pointer;
  }
`
const Ul = styled.ul`
  margin: 0;
  padding: 0;
`

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5em;
`
const LinkStyled = styled(Link)`
  color: white;
  text-decoration: none;
`

const LiOpen = styled(Li)`
  text-align: right;
`

const Sidebar = (props) => {
  const {isOpen, setIsOpen} = props
  return(
    <SidebarStyled isOpen={isOpen}>
      <Ul>
        <LiOpen onClick={() => setIsOpen(!isOpen)}>
          {isOpen
            ? <Icon icon={faChevronLeft} />
            : <Icon icon={faChevronRight} />
          }
        </LiOpen>
        <Li isOpen={isOpen}>
          <Icon icon={faHome} />
          {isOpen ? <LinkStyled to="/">Home</LinkStyled> : ""}
        </Li>
        <Li isOpen={isOpen}><Icon icon={faCommentDollar} />{isOpen ? <LinkStyled to="/leads">Leads</LinkStyled> : ""}</Li>
        <Li isOpen={isOpen}><Icon icon={faUser} /> {isOpen ? "People" : ""}</Li>
        <Li isOpen={isOpen}><Icon icon={faListUl} /> {isOpen ? "Jobs" : ""}</Li>
        <Li isOpen={isOpen}><Icon icon={faMapMarkerAlt} /> {isOpen ? "Map" : ""}</Li>
        <Li isOpen={isOpen}><Icon icon={faCalculator} /> {isOpen ? <LinkStyled to="/estimate">Estimate</LinkStyled>: ""}</Li>
      </Ul>
    </SidebarStyled>
  )
}

export default Sidebar