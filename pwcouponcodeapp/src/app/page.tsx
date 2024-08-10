import Header from "./components/header";

export default function Home() {
  const courses = [
    { course: "Pw Neet Coupon code", discount: "", link: "" },
    { course: "PW JEE Coupon code", discount: "", link: "" },
    { course: "PW UPSC COURSE", discount: "", link: "" },
    { course: "PW GATE COURSE", link: "", discount: "" },
    { course: "IIT JAM Course", link: "", discount: "" },
    { course: "Commerce Courses", link: "", discount: "" },
    { course: "CAT Course", link: "", discount: "" },
    { course: "MBA Entrance Course", link: "", discount: "" },
    { course: "CSIR NET Course", link: "", discount: "" },
    { course: "CLAT Course", link: "", discount: "" },
    { course: "CA Intermediate Course", link: "", discount: "" },
    { course: "School Courses", link: "", discount: "" },
    { course: "Other Course", link: "", discount: "" },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-white">
      <h2 className="text-5xl leading-7 text-gray-900 ">
        Physics Wallah Coupon Code
      </h2>
      <div className="mt-10 w-1/2 font-normal">
        <p>
          Physics Wallah is your one-stop destination for top-notch courses in
          various categories, including UPSC, Gate, MBA, IIT JAM, and CISR NET.
          With the coupon code, you can avail exclusive discounts on the UPSC
          course. Use the code for savings on the Gate course, AKRAM50 for the
          MBA Wallah course, MOAR10 for the IIT JAM course, and MOAR20 for the
          CISR NET course. Don't miss this opportunity to enhance your
          preparation and excel in your chosen field with Physics Wallah's
          expert guidance and comprehensive study material. Enroll now and
          unlock these amazing discounts!
        </p>
      </div>
      <div className="flex min-h-screen flex-col items-center mt-24 w-24">
        <table className="w-10 table ">
          <thead>
            <tr>
              <th scope="col">Course</th>
              <th scope="col">Discount</th>
              <th scope="col">Coupon Code</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => {
              return (
                <tr key={Math.random()}>
                  <td>{course.course}</td>
                  <td>{course.discount}</td>
                  <td>{course.link}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
