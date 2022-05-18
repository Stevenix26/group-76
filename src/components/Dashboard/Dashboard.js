import React from 'react'
import "./dashboard.css"
import {ArrowDownward, ArrowUpward} from "@mui/icons-material"
import {LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {Event} from '@mui/icons-material';

function Dashboard() {

  

  const data = [
    {
      name: 'Jan',
      "Active User": 1000,
    },
    {
      name: 'Feb',
      "Active User": 5000,
    },
    {
      name: 'Mar',
      "Active User": 4000,
    },
    {
      name: 'Apr',
      "Active User": 2000,
    },
    {
      name: 'May',
      "Active User": 7000,
    },
    {
      name: 'Jun',
      "Active User": 500,
    },
    {
      name: 'Jul',
      "Active User": 8000,
    },
    {
      name: 'Aug',
      "Active User": 5000,
    },
    {
      name: 'Sep',
      "Active User": 6000,
    },
    {
      name: 'Oct',
      "Active User": 5000,
    },
    {
      name: 'Nov',
      "Active User": 4000,
    },
    {
      name: 'Dec',
      "Active User": 3000,
    }
  ];

  return (
    <div className='dashboard'>
        <div className='features'>
          <div className='featureItem'>
            <span className='featureTitle'>
              Revenue
            </span>
            <div className='featureMoneyContainer'>
              <span className='featureMoney'>&#8358;500,000</span>
              <span className='featureMoneyRate'>-12.4 <ArrowDownward className='featureIcon negative'/>
              </span>
            </div>
            <span className='featureSub'>Compared to last Month</span>
          </div>
          <div className='featureItem'>
            <span className='featureTitle'>
              Sales
            </span>
            <div className='featureMoneyContainer'>
              <span className='featureMoney'>&#8358;900,000</span>
              <span className='featureMoneyRate'>-24.4 <ArrowDownward className='featureIcon negative'/>
              </span>
            </div>
            <span className='featureSub'>Compared to last Month</span>
          </div>
          <div className='featureItem'>
            <span className='featureTitle'>
              Cost
            </span>
            <div className='featureMoneyContainer'>
              <span className='featureMoney'>&#8358;540,500</span>
              <span className='featureMoneyRate'>+5.4 <ArrowUpward className='featureIcon positive'/>
              </span>
            </div>
            <span className='featureSub'>Compared to last Month</span>
          </div>
        </div>
        <div className='chart'>
          <h3 className='chartTitle'>
          Sales Analytics
          </h3>
          <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data ={data}>
              <XAxis dataKey="name" stroke ="#1c9941"/>
              <Line type ="monotone" dataKey = "Active User" stroke="#404a46"/>
              <Tooltip/>
              <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className='dashboard_widget'>
          <div className='small_widget'>
            <h3>
              Upcoming Events
            </h3>
            <div className='event_container'>
              <div className='event'>
                <span className='event_date'><Event className='eventIcon'/> 20 May, fri</span>
                <span className='event_title'>103th Web Conference</span>
              </div>
              <div className='event'>
                <span className='event_date'><Event className='eventIcon'/> 24 May, Tue</span>
                <span className='event_title'>Lanuch with Steve</span>
              </div>
              <div className='event'>
                <span className='event_date'><Event className='eventIcon'/> 29 May, Mon</span>
                <span className='event_title'>Meeting with Partners</span>
              </div>
              <div className='event'>
                <span className='event_date'><Event className='eventIcon'/> 12 Jun, Thu</span>
                <span className='event_title'>Weekly Meeting</span>
              </div>
              <div className='event'>
                <span className='event_date'><Event className='eventIcon'/> 15 Jun, Sat</span>
                <span className='event_title'>Company Outing</span>
              </div>
              <div className='event last'>
                <span className='event_date'><Event className='eventIcon'/> 30 Jun, Wed</span>
                <span className='event_title'>Annual Leave</span>
              </div>
            </div>
            <div className='event_button'>
              See more
            </div>
          </div>
          <div className='large_widget'>
            <h3 className='widgeTitle'>Recent Transactions</h3>
            <table className='widget_table'>
              <tr className='widget_table_tr'>
                <th className='widget_th'>Customer</th>
                <th className='widget_th'>Date</th>
                <th className='widget_th'>Amount</th>
                <th className='widget_th'>Status</th>
              </tr>
              <tr className='widget_table_tr'>
                <td className='widget_table_user'>
                  <img className='widget_img' src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' alt='user'/>
                  <span className="widget_username">
                    King Pin
                  </span>
                </td>
                <td className='widget_date'>
                  May 2, 2022
                </td>
                <td className='widget_amount'>
                  &#8358;30000
                </td>
                <td className='widget_status'>
                  <div className='inactive'>Inactive</div>
                </td>
              </tr>
              <tr className='widget_table_tr'>
                <td className='widget_table_user'>
                  <img className='widget_img' src='https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='user'/>
                  <span className="widget_username">
                    Anna Bens
                  </span>
                </td>
                <td className='widget_date'>
                  Mar 25, 2022
                </td>
                <td className='widget_amount'>
                  &#8358;20000
                </td>
                <td className='widget_status'>
                  <div className='inactive'>Inactive</div>
                </td>
              </tr>
              <tr className='widget_table_tr'>
                <td className='widget_table_user'>
                  <img className='widget_img' src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='user'/>
                  <span className="widget_username">
                    Victor Lambo
                  </span>
                </td>
                <td className='widget_date'>
                  May 15, 2022
                </td>
                <td className='widget_amount'>
                  &#8358;10000
                </td>
                <td className='widget_status'>
                  <div className='active'>Active</div>
                </td>
              </tr>
              <tr className='widget_table_tr'>
                <td className='widget_table_user'>
                  <img className='widget_img' src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' alt='user'/>
                  <span className="widget_username">
                    Rob Shibi
                  </span>
                </td>
                <td className='widget_date'>
                  May 17, 2022
                </td>
                <td className='widget_amount'>
                  &#8358;30000
                </td>
                <td className='widget_status'>
                  <div className='active'>Active</div>
                </td>
              </tr>
              <tr className='widget_table_tr'>
                <td className='widget_table_user'>
                  <img className='widget_img' src='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='user'/>
                  <span className="widget_username">
                    Kate Mamagold
                  </span>
                </td>
                <td className='widget_date'>
                  May 12, 2022
                </td>
                <td className='widget_amount'>
                  &#8358;30000
                </td>
                <td className='widget_status'>
                  <div className='active'>Active</div>
                </td>
              </tr>
            </table>
          </div>
        </div>
    </div>
  )
}

export default Dashboard 