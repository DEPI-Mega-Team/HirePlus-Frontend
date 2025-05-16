import React, { useState } from 'react';
import styles from './searchBar.module.css';
import Button from '../button/Button';
import searchIcon from '@/assets/icons/Search.svg';
import locationIcon from '@/assets/icons/Location.svg';
import dropdownArrow from '@/assets/icons/ArrowDown.svg';


interface SearchBarProps {
  onSearch?: (searchParams: { key1: string; key2: string }) => void;
  title1:string;
  title2:string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, title1, title2 }) => {
  const [key1, setKeyword] = useState('');
  const [key2, setLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ key1, key2 });
    }
  };

  return (
    <div className={styles.searchBarContainer}>
      <form onSubmit={handleSearch} className={styles.searchBar}>
        <div className={styles.inputGroup}>
          <div className={styles.searchInput}>
            <img className={styles['searchIcon']} src={searchIcon} alt="search icon" />
            <input
              type="text"
              value={key1}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder={title1}
              className={styles.input}
              aria-label={title1}
            />
          </div>
          
          <div className={styles.divider}></div>
          
          <div className={styles.locationInput}>
            <img className={styles['locationIcon']} src={locationIcon} alt="location icon" />
            <input
              type="text"
              value={key2}
              onChange={(e) => setLocation(e.target.value)}
              placeholder={title2}
              className={styles.input}
              aria-label={title2}
            />
            <img className={styles['dropdownArrow']} src={dropdownArrow} alt="dropdown arrow" />
          </div>
        </div>
              <div className={styles['searchButton']}>
        <Button filled={true} type="submit" >
          Search my job
        </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
