import { useState } from "react";
import ActivityForm from "../components/activities/ActivityForm";
import ActivityList from "../components/activities/ActivityList";

function ActivitiesPage() {
  const [editActivity, setEditActivity] = useState(null);

  return (
    <>
      <ActivityForm
        editActivity={editActivity}
        clearEdit={() => setEditActivity(null)}
      />
      <ActivityList onEdit={setEditActivity} />
    </>
  );
}

export default ActivitiesPage;
