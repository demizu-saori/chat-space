json.user_name @message.user.name
json.time @message.created_at.strftime("%Y/%m/%d (%a) %H:%M:%S")
json.text @message.content
json.image @message.image.url
json.message_id @message.id
