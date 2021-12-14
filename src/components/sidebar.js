import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faCommentDollar, faListUl, faMapMarkerAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


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

const LiOpen = styled(Li)`
  text-align: right;
`



const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)


  return(
    <SidebarStyled isOpen={isOpen}>
      <Ul>
        <LiOpen onClick={() => setIsOpen(!isOpen)}>
          {isOpen
            ? <Icon icon={faChevronLeft} />
            : <Icon icon={faChevronRight} />
          }
        </LiOpen>
        <Li isOpen={isOpen}><Icon icon={faHome} /> {isOpen ? "Home" : ""} </Li>
        <Li isOpen={isOpen}><Icon icon={faCommentDollar} />{isOpen ? "Leads" : ""}</Li>
        <Li isOpen={isOpen}><Icon icon={faUser} /> {isOpen ? "People" : ""}</Li>
        <Li isOpen={isOpen}><Icon icon={faListUl} /> {isOpen ? "Jobs" : ""}</Li>
        <Li isOpen={isOpen}><Icon icon={faMapMarkerAlt} /> {isOpen ? "Map" : ""}</Li>
      </Ul>
    </SidebarStyled>
  )
}

export default Sidebar