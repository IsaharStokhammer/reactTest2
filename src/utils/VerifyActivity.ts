interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

// const useIsVerified = () => {
const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  const rolesArr: string[] = [
    "Unknown Personnel",
    "Guest",
    "Student",
    "Developer",
    "Executive Personnel",
  ];
  const roleIndex: number = rolesArr.indexOf(role);
  const activityIndex: number = activities.indexOf(activity);
  if (roleIndex === -1 || activityIndex === -1) {
    return false;
  }

  if (activityIndex < roleIndex) {
    return false;
  }
  return true;

  //FILL HERE 3.7
};
export default useIsVerified;
