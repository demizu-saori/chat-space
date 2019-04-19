json.user_name @message.user.name
json.time @message.created_at.strftime("%Y/%m/%d (%a) %H:%M:%S")
json.text @message.content
json.image @message.image
json.group_id @message.group_id
json.user_id @message.user.id
json.message_id @message.id
