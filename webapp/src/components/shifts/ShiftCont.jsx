import React from "react";

function ShiftCont({ shift }) {
  return (
    <div>
      {shift.map((_shift) => (
        <div>
          {_shift.date.replaceAll("-", "/")} - shift of {_shift.shiftTime} hours
        </div>
      ))}
    </div>
  );
}
export default ShiftCont;
