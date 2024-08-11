import { ChartBarIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { WHATSAPP_API } from "./config/constants";

export default function Home() {
  const courses = [
    { course: "PW Neet Courses", discount: "90% Off", couponCode: "" },
    { course: "PW JEE Courses", discount: "90% Off", couponCode: "" },
    { course: "PW UPSC Courses", discount: "90% Off", couponCode: "" },
    { course: "PW GATE Courses", couponCode: "", discount: "90% Off" },
    { course: "IIT JAM Courses", couponCode: "MOAR10", discount: "90% Off" },
    { course: "Commerce Courses", couponCode: "EETT4ALL", discount: "90% Off" },
    { course: "CAT Courses", couponCode: "EETT4ALL", discount: "90% Off" },
    {
      course: "MBA Entrance Courses",
      couponCode: "EETT4ALL",
      discount: "90% Off",
    },
    { course: "CSIR NET Courses", couponCode: "MOAR20", discount: "90% Off" },
    { course: "CLAT Course", couponCode: "EETT4ALL", discount: "90% Off" },
    {
      course: "CA Intermediate Courses",
      couponCode: "EETT4ALL",
      discount: "90% Off",
    },
    { course: "School Courses", couponCode: "", discount: "90% Off" },
    { course: "Other Courses", couponCode: "", discount: "90% Off" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-white">
      <h2 className="text-5xl leading-7 text-gray-900 ">
        Physics Wallah Coupon Code
      </h2>
      <div className="mt-10 w-1/2 font-normal">
        <p>
          Welcome to our website, where learning meets savings! Are you ready to
          supercharge your educational journey with Physics Wallah courses like
          PW UPSC, GATE, and PW SKILLS? Look no further! Here, we provide you
          with the latest working discount coupon codes, ensuring you get the
          best value for your learning experience. Whether you're aspiring for
          UPSC success USE UPSC COUPON CODE , aiming to conquer the GATE exams
          USE GATE COUPON CODE , or keen on honing your skills with Physics
          Wallah's specialized courses, we've got you covered. With our
          exclusive discounts, you can embark on your educational adventure
          while keeping your budget intact. Get ready to unlock knowledge and
          savings simultaneously – because learning smarter starts right here,
          right now.
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
                  <td>
                    {course.couponCode !== "" ? (
                      course.couponCode
                    ) : (
                      <button type="submit">
                        <span>
                          <a
                            href={
                              WHATSAPP_API +
                              `I need coupon code for ${course.course}`
                            }
                            target="_blank"
                          >
                            Get Coupon Code
                          </a>
                        </span>
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-10 p-10 font-normal">
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
    </main>
  );
}
