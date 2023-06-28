import React from 'react'

import Stories from '../../Components/Stories/Stories'

const UserFeed = () => {
  return (
    <div className='user-feed-container'>
        <div className='user-feed-inner'>

          <div className='posts-and-recommended'>

            <div className='posts-contanier'>
                <Stories/>
            </div>

            <div className='recommended-stories'>
                <h1>hello</h1>
            </div>
          </div>

        </div>
    </div>
  )
}

export default UserFeed