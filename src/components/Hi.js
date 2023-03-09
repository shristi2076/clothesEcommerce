// import React from 'react';
// import CheckroomIcon from '@mui/icons-material/Checkroom';

// const Hi = () => {
//     return (
//       <div>
//       	<CheckroomIcon /> FitMe
//       </div>
//     );
// }

// export default Hi;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

<><FontAwesomeIcon icon={solid('user-secret')} /><FontAwesomeIcon icon={regular('coffee')} /><FontAwesomeIcon icon={icon({ name: 'coffee', style: 'solid' })} /> <FontAwesomeIcon icon={brands('twitter')} /></>