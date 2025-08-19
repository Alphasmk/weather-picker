import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Select, Space } from 'antd';
import { useState } from 'react';

function SearchComponent({ onSearch }) {
    const [inputValue, setInputValue] = useState('');

    const handleClick = () => {
        if (inputValue.trim()) {
            onSearch(inputValue);
        }
    };

    return (
        <div className="flex justify-center" style={{ height: '40px' }}>
            <Space.Compact style={{ width: '50%' }} className='justify-center'>
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onPressEnter={handleClick}
                />
                <Button type="primary"
                    style={{ height: '40px' }}
                    onClick={handleClick}>Найти</Button>
            </Space.Compact>
        </div>
    )
}

export default SearchComponent