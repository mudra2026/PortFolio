from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle, KeepTogether

OUTPUT_PATH = r"C:\Users\Mudra D Kamble\OneDrive\Desktop\Word Puzzle\Word Puzzle\wwwroot\Mudra_Resume.pdf"

styles = getSampleStyleSheet()

name_style = ParagraphStyle(
    'NameStyle',
    parent=styles['Title'],
    fontName='Helvetica-Bold',
    fontSize=25,
    leading=28,
    textColor=colors.black,
    alignment=1,
    spaceAfter=4,
)

subtitle_style = ParagraphStyle(
    'SubtitleStyle',
    parent=styles['BodyText'],
    fontName='Helvetica-Oblique',
    fontSize=12,
    leading=14,
    textColor=colors.black,
    alignment=1,
    spaceAfter=12,
)

section_style = ParagraphStyle(
    'SectionStyle',
    parent=styles['Heading2'],
    fontName='Helvetica-Bold',
    fontSize=16,
    leading=18,
    textColor=colors.black,
    spaceBefore=10,
    spaceAfter=8,
)

label_style = ParagraphStyle(
    'LabelStyle',
    parent=styles['BodyText'],
    fontName='Helvetica-Bold',
    fontSize=9,
    leading=11,
    textColor=colors.black,
    spaceAfter=2,
)

body_style = ParagraphStyle(
    'BodyStyle',
    parent=styles['BodyText'],
    fontName='Helvetica',
    fontSize=9.5,
    leading=13,
    textColor=colors.HexColor('#303030'),
    spaceAfter=6,
)

small_style = ParagraphStyle(
    'SmallStyle',
    parent=styles['BodyText'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=11,
    textColor=colors.HexColor('#3f3f3f'),
    spaceAfter=4,
)

def para(txt, style):
    return Paragraph(txt, style)

# Main content blocks
story = []
story.append(para('Mudra Dattatray Kamble', name_style))
story.append(para('IT Engineering Student | Android Developer', subtitle_style))
story.append(Spacer(1, 4))

left = []
left.append(para('Phone: +91 9653270296', body_style))
left.append(para('Email: mudrakamble5@gmail.com', body_style))
left.append(para('LinkedIn: linkedin.com/in/mudra-kamble', body_style))
left.append(para('GitHub: github.com/mudra2026', body_style))
left.append(Spacer(1, 18))
left.append(para('EDUCATION', section_style))
left.append(para('<b>Bachelor of Engineering</b><br/>Current Degree Pursuit<br/>2022 - Present', body_style))
left.append(Spacer(1, 10))
left.append(para('<b>Diploma in Computer Engineering</b><br/>Saraswati Institute of Technology<br/>2019 - 2022', body_style))
left.append(Spacer(1, 18))
left.append(para('EXPERTISE', section_style))
for item in ['Android app development', 'Java programming', 'XML UI design', 'Firebase basics', 'Teamwork', 'Problem solving']:
    left.append(para('• ' + item, small_style))
left.append(Spacer(1, 18))
left.append(para('LANGUAGE', section_style))
for item in ['English', 'Hindi', 'Marathi']:
    left.append(para('• ' + item, small_style))

right = []
right.append(para('ABOUT ME', section_style))
right.append(para(
    'I am Mudra Dattatray Kamble, a motivated IT engineering student focused on Android development, UI design, and practical app-building skills. I enjoy creating functional mobile applications that solve real user needs and look clean, simple, and professional.',
    body_style,
))
right.append(para(
    'My work combines technical learning with creativity, teamwork, and communication. I am passionate about app development, Java/XML projects, Firebase integration, and building experiences that are both useful and appealing for users.',
    body_style,
))
right.append(Spacer(1, 12))
right.append(para('WORK EXPERIENCE', section_style))
experience = [
    ('Jan 2022 - Present', 'Saraswati Institute of Technology', 'Android Developer', 'Built Android app concepts and user-focused interfaces using Java, XML, and Firebase while improving usability and workflow design.'),
    ('2019 - 2021', 'Campus Project Work', 'App Development Intern / Student Developer', 'Created mobile UI and logic for student projects, learning design systems, app structure, and practical development techniques.'),
]
for period, company, role, desc in experience:
    right.append(para(f'<b>{period}</b><br/><b>{company}</b><br/>{role}<br/>{desc}', body_style))
    right.append(Spacer(1, 8))
right.append(Spacer(1, 12))
right.append(para('REFERENCES', section_style))
ref_cols = [
    ['<b>Estelle Darcy</b><br/>Wardiere Inc. / CEO<br/>Phone: +123-456-7890<br/>Email: hello@reallygreatsite.com'],
    ['<b>Harper Russo</b><br/>Wardiere Inc. / CEO<br/>Phone: +123-456-7890<br/>Email: hello@reallygreatsite.com']
]
ref_table = Table(ref_cols, colWidths=[220, 220])
ref_table.setStyle(TableStyle([
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ('LEFTPADDING', (0, 0), (-1, -1), 0),
    ('RIGHTPADDING', (0, 0), (-1, -1), 0),
    ('TOPPADDING', (0, 0), (-1, -1), 0),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
]))
right.append(ref_table)

content = Table([[left, right]], colWidths=[200, 330], rowHeights=[720])
content.setStyle(TableStyle([
    ('VALIGN', (0, 0), (-1, -1), 'TOP'),
    ('LEFTPADDING', (0, 0), (-1, -1), 0),
    ('RIGHTPADDING', (0, 0), (-1, -1), 0),
    ('TOPPADDING', (0, 0), (-1, -1), 0),
    ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
    ('LINEBELOW', (0, 0), (0, -1), 1, colors.black),
    ('LINEAFTER', (0, 0), (0, -1), 1, colors.black),
]))

story.append(content)

doc = SimpleDocTemplate(
    OUTPUT_PATH,
    pagesize=A4,
    leftMargin=25 * mm,
    rightMargin=25 * mm,
    topMargin=12 * mm,
    bottomMargin=12 * mm,
    title='Mudra Dattatray Kamble Resume',
)
doc.build(story)
print('Resume PDF regenerated successfully:', OUTPUT_PATH)
