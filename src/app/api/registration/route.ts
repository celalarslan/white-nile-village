import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      applicationNumber,
      headOfFamilyName,
      phoneNumber,
      village,
      idNumber,
      idDocType,
      householdSize,
      childrenCount,
      womenCount,
      youthCount,
      schoolChildren,
      hasDisabled,
      mainIncome,
      monthlyIncome,
      treeCount,
      annualProduction,
      hasLand,
      landSize,
      waterSource,
      crops,
      suitableForTomato,
      cattleCount,
      sheepGoatCount,
      hasMilkProduction,
      hasVetSupport,
      mostUrgentNeed,
      trainingNeed,
      notes,
      consent1,
      consent2,
      consent3,
      consent4,
      website,
      locale,
    } = body;

    // 4. Honeypot check (anti-spam)
    if (website && website.trim() !== '') {
      // Return a fake success response to trick the bot
      return NextResponse.json({ success: true, applicationNumber });
    }

    // 3. Simple required fields check
    if (
      !applicationNumber ||
      !headOfFamilyName ||
      !headOfFamilyName.trim() ||
      !phoneNumber ||
      !phoneNumber.trim() ||
      !village ||
      !village.trim()
    ) {
      return NextResponse.json(
        { success: false, error: 'Required fields are missing' },
        { status: 400 }
      );
    }

    // 5. Read SMTP values from environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || 'no-reply@example.com';
    const receiverEmail = process.env.REGISTRATION_RECEIVER_EMAIL || 'iron.celal@gmail.com';

    // Verify SMTP variables are set
    if (!smtpHost || !smtpUser || !smtpPass) {
      // Log error internally, do not return detailed error to client for security
      console.error('SMTP Configuration is missing in environment variables.');
      return NextResponse.json(
        { success: false, error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const submissionDate = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

    // HTML Email Template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Household Registration</title>
          <style>
            body { font-family: sans-serif; color: #333; line-height: 1.6; background-color: #FAF7EF; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: #fff; border: 1px solid #E7E0D2; border-radius: 12px; padding: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
            h2 { color: #123524; border-bottom: 2px solid #E7E0D2; padding-bottom: 10px; margin-top: 0; }
            table { width: 100%; border-collapse: collapse; margin: 20px 0; }
            th, td { padding: 10px; border-bottom: 1px solid #FAF7EF; text-align: left; vertical-align: top; }
            th { width: 40%; font-weight: bold; color: #555; background-color: #FAF7EF; }
            .section-title { font-weight: bold; color: #9A6B3F; background-color: #FAF7EF; padding: 8px 10px; margin-top: 20px; border-radius: 4px; }
            pre { background: #f4f4f4; padding: 10px; border-radius: 6px; overflow-x: auto; font-size: 12px; }
            .footer-note { font-size: 11px; color: #777; margin-top: 30px; border-top: 1px solid #E7E0D2; padding-top: 15px; line-height: 1.5; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>New Household Registration</h2>
            
            <table>
              <tr>
                <th>Application Number</th>
                <td><strong>${applicationNumber}</strong></td>
              </tr>
              <tr>
                <th>Submission Date (UTC)</th>
                <td>${submissionDate}</td>
              </tr>
              <tr>
                <th>Language</th>
                <td>${locale === 'ar' ? 'Arabic' : 'English'}</td>
              </tr>
            </table>

            <div class="section-title">Primary Contact & Identity</div>
            <table>
              <tr>
                <th>Head of Family Name</th>
                <td>${headOfFamilyName}</td>
              </tr>
              <tr>
                <th>Phone Number</th>
                <td>${phoneNumber}</td>
              </tr>
              <tr>
                <th>Village</th>
                <td>${village}</td>
              </tr>
              <tr>
                <th>ID Number / Type</th>
                <td>${idNumber} (${idDocType})</td>
              </tr>
            </table>

            <div class="section-title">Household Demographics</div>
            <table>
              <tr>
                <th>Household Size</th>
                <td>${householdSize || 'N/A'}</td>
              </tr>
              <tr>
                <th>Number of Children</th>
                <td>${childrenCount || 'N/A'}</td>
              </tr>
              <tr>
                <th>Number of Women</th>
                <td>${womenCount || 'N/A'}</td>
              </tr>
              <tr>
                <th>Number of Youth</th>
                <td>${youthCount || 'N/A'}</td>
              </tr>
              <tr>
                <th>School-going Children</th>
                <td>${schoolChildren || 'N/A'}</td>
              </tr>
              <tr>
                <th>Disabled Family Member</th>
                <td>${hasDisabled === 'yes' ? 'Yes' : 'No'}</td>
              </tr>
            </table>

            <div class="section-title">Education & Income</div>
            <table>
              <tr>
                <th>Main Income Source</th>
                <td>${mainIncome || 'N/A'}</td>
              </tr>
              <tr>
                <th>Est. Monthly Income</th>
                <td>${monthlyIncome || 'N/A'}</td>
              </tr>
            </table>

            <div class="section-title">Gum Arabic Profile</div>
            <table>
              <tr>
                <th>Acacia Trees Owned</th>
                <td>${treeCount || 'N/A'}</td>
              </tr>
              <tr>
                <th>Annual Production</th>
                <td>${annualProduction || 'N/A'}</td>
              </tr>
            </table>

            <div class="section-title">Agriculture Profile</div>
            <table>
              <tr>
                <th>Owns Agricultural Land</th>
                <td>${hasLand || 'N/A'}</td>
              </tr>
              <tr>
                <th>Land Size</th>
                <td>${landSize || 'N/A'}</td>
              </tr>
              <tr>
                <th>Water Source</th>
                <td>${waterSource || 'N/A'}</td>
              </tr>
              <tr>
                <th>Grown Crops</th>
                <td>${crops || 'N/A'}</td>
              </tr>
              <tr>
                <th>Suitable for Tomato</th>
                <td>${suitableForTomato || 'N/A'}</td>
              </tr>
            </table>

            <div class="section-title">Livestock Profile</div>
            <table>
              <tr>
                <th>Cattle Count</th>
                <td>${cattleCount || 'N/A'}</td>
              </tr>
              <tr>
                <th>Sheep & Goat Count</th>
                <td>${sheepGoatCount || 'N/A'}</td>
              </tr>
              <tr>
                <th>Has Milk Production</th>
                <td>${hasMilkProduction || 'N/A'}</td>
              </tr>
              <tr>
                <th>Has Vet Support</th>
                <td>${hasVetSupport || 'N/A'}</td>
              </tr>
            </table>

            <div class="section-title">Needs Assessment & Training</div>
            <table>
              <tr>
                <th>Most Urgent Need</th>
                <td>${mostUrgentNeed || 'N/A'}</td>
              </tr>
              <tr>
                <th>Requested Training</th>
                <td>${trainingNeed || 'N/A'}</td>
              </tr>
              <tr>
                <th>Additional Notes</th>
                <td>${notes || 'N/A'}</td>
              </tr>
            </table>

            <div class="section-title">Consents & Confirmations</div>
            <table>
              <tr>
                <th>Data Accuracy Confirmed</th>
                <td>${consent1 ? 'Yes' : 'No'}</td>
              </tr>
              <tr>
                <th>Data Processing Consent</th>
                <td>${consent2 ? 'Yes' : 'No'}</td>
              </tr>
              <tr>
                <th>Data Privacy Consent</th>
                <td>${consent3 ? 'Yes' : 'No'}</td>
              </tr>
              <tr>
                <th>Project Assessment Funder Understanding</th>
                <td>${consent4 ? 'Yes' : 'No'}</td>
              </tr>
            </table>

            <div class="section-title">Raw JSON Payload</div>
            <pre>${JSON.stringify(body, null, 2)}</pre>

            <div class="footer-note">
              This registration does not create an automatic financial support promise. The data is collected for assessment, planning, training and future development support opportunities.
            </div>
          </div>
        </body>
      </html>
    `;

    // Send Email
    await transporter.sendMail({
      from: smtpFrom,
      to: receiverEmail,
      subject: `New Household Registration – ${applicationNumber}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, applicationNumber });
  } catch (error: any) {
    console.error('Error handling registration API:', error);
    return NextResponse.json(
      { success: false, error: 'Submission failed' },
      { status: 500 }
    );
  }
}
