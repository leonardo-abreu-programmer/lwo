import Project from "../../components/project";

export default function Page() {
  return (
    <div className="w-full">
      <h3 className="pb-6">All of my projects:</h3>
      <div className="grid grid-cols-3 gap-4">
        <Project title='Tripmaster' description='A website to help you building your trip' github='https://github.com/AbreuDProgrammer/Tripmaster' link='http://tripmaster.lwoabreu.com'/>
        <Project title='Tripmaster' description='A website to help you building your trip' github='www.github.com'/>
        <Project title='Tripmaster' description='A website to help you building your trip' github='www.github.com'/>
        <Project title='Tripmaster' description='A website to help you building your trip' github='www.github.com'/>
        <Project title='Tripmaster' description='A website to help you building your trip' github='www.github.com'/>
        <Project title='Tripmaster' description='A website to help you building your trip' github='www.github.com'/>
        <Project title='Tripmaster' description='A website to help you building your trip' github='www.github.com'/>
      </div>
    </div>
  )
}
