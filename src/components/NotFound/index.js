import {
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundPara,
} from './styledComponents'

const NotFound = () => (
  <>
    <NotFoundContainer>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
        alt="not found"
      />
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundPara>
        We are sorry, the page you requested could not be found
      </NotFoundPara>
    </NotFoundContainer>
  </>
)
export default NotFound
