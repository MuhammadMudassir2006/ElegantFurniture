// import React, { useState } from 'react';
// import './puzzle.css'

// const Puzzle = ({ onSolve }) => {
//   const [answer, setAnswer] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (answer.toLowerCase() === 'moye') { // Example puzzle answer
//       onSolve(true);
//     } else {
//       onSolve(false);
//     }
//   };

//   return (
//     <>
//     <div>
//       <h2>Verify Puzzle</h2>
//       <p>What is the answer to life, the universe, and everything?</p>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={answer}
//           onChange={(e) => setAnswer(e.target.value)}
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
    
//     </>
//   );
// };

// export default Puzzle;
