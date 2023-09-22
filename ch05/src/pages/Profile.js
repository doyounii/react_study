import React from 'react'
import { useParams } from 'react-router-dom';

const data = {
    sangmin : { name :'최상민', description: '백엔드를 좋아하는 개발자', },
    yeun : { name :'신예은', description: '프론트엔드를 좋아하는 개발자', },
    sehoon : { name :'오세훈', description: '서울을 사랑하는 개발자', },
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];
    return (
        <div>
            <h2>사용자 프로필</h2>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
            )}
        </div>
    )
}

export default Profile