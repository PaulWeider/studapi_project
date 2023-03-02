

from studbot.models import *
import schedule
import time
import datetime
import emoji


import telebot


bot = telebot.TeleBot('5612058268:AAF1bx62eOsyQe_jSsZQJmoB03FXs1mg9Yw')

students = Students.objects.all()
schedule_monday = Schedule.objects.filter(dayOfTheWeek="Monday")
schedule_tuesday = Schedule.objects.filter(dayOfTheWeek="Tuesday")
schedule_wednesday = Schedule.objects.filter(dayOfTheWeek="Wednesday")
schedule_thursday = Schedule.objects.filter(dayOfTheWeek="Thursday")
schedule_friday = Schedule.objects.filter(dayOfTheWeek="Friday")


@bot.message_handler(commands=['start'])
def start(message):
    bot.send_message(message.chat.id, 'Вітаю!')
    bot.send_message(message.chat.id, 'Можливо я тебе знаю! Введи свій логін'+ emoji.emojize(":expressionless_face:")+':')

def monday(message):
    monday = ""
    i = 0
    for schedule in schedule_monday:
        if student_user.groupId.identifier == schedule.groupId.identifier:
            i += 1
            monday +=str(i+1) +". "+ str(schedule.startTime) +"-"+ str(schedule.endTime)+" "+" " + schedule.disciplineId.disc_name + " (каб." + str(
                schedule.cabinet) + ")\n"
    bot.send_message(message.chat.id,f'Завтра на тебе чекають такі пари:\n{monday}!\nГарного дня!')

def tuesday(message):
    tuesday = ""
    i = 0
    for schedule in schedule_tuesday:
        i += 1
        tuesday += str(i + 1) + ". " + str(schedule.startTime) + "-" + str(
            schedule.endTime) + " " + " " + schedule.disciplineId.disc_name + " (каб." + str(
            schedule.cabinet) + ")\n"
    bot.send_message(message.chat.id,f'Завтра на тебе чекають такі пари:\n{tuesday}\nГарного дня!')

def wednesday(message):
    wednesday = ""
    i = 0
    for schedule in schedule_wednesday:
        i += 1
        wednesday += str(i) + ". " + str(schedule.startTime) + "-" + str(
            schedule.endTime) + " " + schedule.disciplineId.disc_name + " (каб." + str(
            schedule.cabinet) + ")\n"
    bot.send_message(message.chat.id,f'Завтра на тебе чекають такі пари:\n{wednesday}\nГарного дня!')

def thursday(message):
    thursday = ""
    i = 0
    for schedule in schedule_thursday:
        if student_user.groupId.identifier == schedule.groupId.identifier:
            i +=1
            thursday += str(i) + ". " + str(schedule.startTime) + "-" + str(
                schedule.endTime) + " " + schedule.disciplineId.disc_name + " (каб." + str(schedule.cabinet) + ")\n"
    bot.send_message(message.chat.id,f'Завтра на тебе чекають такі пари:\n{thursday}\nГарного дня!')

def friday(message):
    global student_user
    friday = ""
    i = 0
    for schedule in schedule_thursday:
        if student_user[0].groupId.identifier == schedule.groupId.identifier:
            i += 1
            friday += str(i) + ". " + str(schedule.startTime) + "-" + str(
                schedule.endTime) + " " + schedule.disciplineId.disc_name + " (каб." + str(
                schedule.cabinet) + ")\n"
    bot.send_message(message.chat.id,f'Завтра на тебе чекають такі пари:\n{friday}\nГарного дня!')

@bot.message_handler(commands=['reminders'])
def reminders(message):

    x = datetime.datetime.now()
    if x.strftime("%A") == "Sunday":
        monday(message)
    elif x.strftime("%A") == "Monday":
        tuesday(message)
    elif x.strftime("%A") == "Tuesday":
        wednesday(message)
    elif x.strftime("%A") == "Wednesday":
        thursday(message)
    elif x.strftime("%A") == "Thursday":
        friday(message)
    elif x.strftime("%A") == "Friday":
        bot.send_message(message.chat.id, 'Та які пари у суботу!?\nВідпочивай!\n\nГарного дня!')
    elif x.strftime("%A") == "Saturday":
        bot.send_message(message.chat.id, 'Та які пари у неділю!?\nВідпочивай!\n\nГарного дня!')
    # schedule.every().sunday.do(monday)
    # schedule.every().monday.do(tuesday)
    # schedule.every().tuesday.do(wednesday)
    # schedule.every().wednesday.do(thursday)
    # schedule.every().thursday.do(friday)
    #
    # while True:
    #     schedule.run_pending()
    #     time.sleep(1)



@bot.message_handler(content_types=['text'])
def get_login(message):

    for student in students:
        if message.text == student.login:
            global student_user
            markup = telebot.types.ReplyKeyboardMarkup(resize_keyboard=True, row_width=2)
            grades = telebot.types.KeyboardButton("Подивитися свої оцінки")
            schedule = telebot.types.KeyboardButton("Переглянути розклад")
            site = telebot.types.KeyboardButton("Відвідати сайт")
            reminders = telebot.types.KeyboardButton("Запустити нагадувалку")
            markup.add(grades, schedule, site, reminders)
            student_user = Students.objects.filter(login=student.login)
            bot.send_message(message.chat.id, f'Таки знаю! Привіт, {message.from_user.first_name}! Обирай, що від мене хочеш'+ emoji.emojize(":grinning_face_with_big_eyes:"), reply_markup=markup)
    mess(message)



@bot.message_handler(content_types=['text'])
def mess(message):
    global student_user

    get_message_bot = message.text.strip().lower()

    if get_message_bot == "відвідати сайт":
        markup = telebot.types.InlineKeyboardMarkup()
        btn_site = telebot.types.InlineKeyboardButton(text='Site', url='http://127.0.0.1:8000/')
        markup.add(btn_site)
        bot.send_message(message.chat.id, "Переходь за посиланням!"+ emoji.emojize(":beaming_face_with_smiling_eyes:")+" Там ти зможешь відредагувати свій профіль, мати доступ до свого розкладу, нарізати собі "
                                          "задач та глянути оціночки. Короче, там цікаво. Клікай кнопку"+ emoji.emojize(":backhand_index_pointing_down:"), reply_markup=markup)


    elif get_message_bot == "запустити нагадувалку":
        bot.send_message(message.chat.id, '/reminders')


    elif get_message_bot == "повернутися":
        markup = telebot.types.ReplyKeyboardMarkup(resize_keyboard=True, row_width=2)
        grades = telebot.types.KeyboardButton("Подивитися свої оцінки")
        schedule = telebot.types.KeyboardButton("Переглянути розклад")
        site = telebot.types.KeyboardButton("Відвідати сайт")
        reminders = telebot.types.KeyboardButton("Запустити нагадувалку")
        markup.add(grades, schedule, site, reminders)
        bot.send_message(message.chat.id, 'Обирай, що від мене хочеш'+ emoji.emojize(":grinning_face_with_big_eyes:"), reply_markup=markup)

    elif get_message_bot == "понеділок":
        monday = ""
        i = 0
        for schedule in schedule_monday:
            if student_user[0].groupId.identifier == schedule.groupId.identifier:
                monday += str(i + 1) + ". " + str(schedule.startTime) + "-" + str(
                    schedule.endTime) + " " + schedule.disciplineId.disc_name + " каб." + str(schedule.cabinet) + "\n"
        bot.send_message(message.chat.id, f'Понеділок ({student_user[0].groupId.identifier})\n{monday}')

    elif get_message_bot == "вівторок":
        tuesday = ""
        i = 0
        for schedule in schedule_tuesday:
            if student_user[0].groupId.identifier == schedule.groupId.identifier:
                tuesday += str(i + 1) + ". " + str(schedule.startTime) + "-" + str(
                    schedule.endTime) + " " + schedule.disciplineId.disc_name + " каб." + str(schedule.cabinet) + "\n"
        bot.send_message(message.chat.id, f'Вівторок ({student_user[0].groupId.identifier})\n{tuesday}')

    elif get_message_bot == "середа":
        wednesday = ""
        i = 0
        for schedule in schedule_wednesday:
            if student_user[0].groupId.identifier == schedule.groupId.identifier:
                i += 1
                wednesday += str(i) + ". " + str(schedule.startTime) + "-" + str(
                    schedule.endTime) + ' ' + schedule.disciplineId.disc_name + ' (каб.' + str(
                    schedule.cabinet) + ")\n"
        bot.send_message(message.chat.id, f'Середа ({student_user[0].groupId.identifier})\n{wednesday}')

    elif get_message_bot == "четвер":
        thursday = ""
        i = 0
        for schedule in schedule_thursday:
            if student_user[0].groupId.identifier == schedule.groupId.identifier:
                i += 1
                thursday += str(i) + ". " + str(schedule.startTime) + "-" + str(
                    schedule.endTime) + " " + schedule.disciplineId.disc_name + " (каб." + str(
                    schedule.cabinet) + ")\n"
        bot.send_message(message.chat.id, f'Четвер ({student_user[0].groupId.identifier})\n{thursday}')

    elif get_message_bot == "п'ятниця":
        friday = ""
        i = 0
        for schedule in schedule_thursday:
            if student_user[0].groupId.identifier == schedule.groupId.identifier:
                i += 1
                friday += str(i) + ". " + str(schedule.startTime) + "-" + str(
                    schedule.endTime) + ' ' + schedule.disciplineId.disc_name + ' (каб.' + str(
                    schedule.cabinet) + ")\n"
        bot.send_message(message.chat.id, f'П`ятниця ({student_user[0].groupId.identifier})\n{friday}')

    elif get_message_bot == "переглянути розклад":
        markup = telebot.types.ReplyKeyboardMarkup(resize_keyboard=True, row_width=1)
        monday = telebot.types.KeyboardButton("Понеділок")
        tuesday = telebot.types.KeyboardButton("Вівторок")
        wednesday = telebot.types.KeyboardButton("Середа")
        thursday = telebot.types.KeyboardButton("Четвер")
        friday = telebot.types.KeyboardButton("П'ятниця")
        ret = telebot.types.KeyboardButton("Повернутися")
        markup.add(monday, tuesday, wednesday, thursday, friday, ret)
        bot.send_message(message.chat.id, 'Обирай день'+ emoji.emojize(":face_with_monocle:")+" Спробую допомогти.", reply_markup=markup)

    elif get_message_bot == "подивитися свої оцінки":
        bot.send_message(message.chat.id, 'Ok!')


bot.polling(non_stop=True)