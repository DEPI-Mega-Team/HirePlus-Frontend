import React, { useState } from 'react';
import styles from './searchBar.module.css';
import Button from '../button/Button';
import searchIcon from '@/assets/icons/Search.svg';
import locationIcon from '@/assets/icons/Location.svg';
import dropdownArrow from '@/assets/icons/ArrowDown.svg';


interface SearchBarProps {
  onSearch?: (searchParams: { keyword: string; location: string }) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ keyword, location });
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
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Job title or keyword"
              className={styles.input}
              aria-label="Job title or keyword"
            />
          </div>
          
          <div className={styles.divider}></div>
          
          <div className={styles.locationInput}>
            <img className={styles['locationIcon']} src={locationIcon} alt="location icon" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className={styles.input}
              aria-label="Location"
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
