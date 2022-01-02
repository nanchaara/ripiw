import PropTypes from 'prop-types'
// import Button from './Button';

const Header = ({ title }) => {
    return (
        <header>
            <h1 class="font-sans font-bold text-5xl text-center pt-4">{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'Ripiw!'
  };

Header.propTypes = {
    title: PropTypes.string.isRequired,
  };

/* <div class="flex flex-row py-6 justify-center space-x-2">
              <Button color="white" text="Lagu" class="btn-tipe"/>
              <Button color="white" text="Film" class="btn-tipe"/>
              <Button color="white" text="Tempat" class="btn-tipe"/>
            </div> */

// CSS in JS
// const headingStyle = {
//     alignItems: 'center',
//     color: 'FDFDFD',
// }

export default Header
