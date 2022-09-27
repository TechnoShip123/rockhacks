let url_for_shrek = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaVDR58XvoG5HUAiw0zdPuPZXd3hsQIw8HZQ&usqp=CAU';
let teamMembers = [
  [url_for_shrek, 'Amisha Sao', 'Female'], 
  [url_for_shrek, 'Nithin Reddy', 'Male'], 
  [url_for_shrek, 'Sopan Jalkote', 'Male'], 
  [url_for_shrek, 'Dyuti Phaneesh', 'Female'], 
  [url_for_shrek, 'Toby Saunders', 'Male']];

//@ts-ignore
function iteratorBreak(array) {
  let new_array = [];
  for(let j = 0; j < array.length/3; j++) {
    let copy_array = [];
    for(let i = 0; i < array.length; i++) {
      
      copy_array.push(array[i]);
    }
    new_array.push(copy_array);
  }
}

//@ts-ignore
teamMembers = iteratorBreak(teamMembers);
const teamMemberList = teamMembers.map((person) =>
  <li>
  <Ppl src={person[0][0]} name={person[0][1]} description={person[0][2]} />
  <Ppl src={person[1][0]} name={person[1][1]} description={person[1][2]} />
  <Ppl src={person[2][0]} name={person[2][1]} description={person[2][2]} />
  </li>
);

function Team() {
  return(
    <section className='team'>
        <h2>
          Our Team
        </h2>
        <ul>{teamMemberList}</ul>
    </section>
  )
}
export default Team;