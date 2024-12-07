import { AiOutlineSearch } from 'react-icons/ai';
import style from './SearchBox.module.css';
import { IconContext } from 'react-icons';

const SearchBox = ({ value, onChange }) => {
  return (
    <div className={style.inputWrap}>
      <input
        type="text"
        className={style.sbox}
        value={value}
        onChange={onChange}
      />
      <IconContext.Provider value={{ className: 'icon', size: 25 }}>
        <AiOutlineSearch />
      </IconContext.Provider>
    </div>
  );
};

export default SearchBox;
