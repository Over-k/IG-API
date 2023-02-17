import os
from api import get_info, save_userData, get_image_base64,messages
import json

# say hello 
messages({"method": "set", "message": "Welcome Here Try Add Instagram Username.","type":"load", "percentage":1})
def available_users():
    return [file.split('.')[0] for file in os.listdir('static/data') if file.endswith(".json")]

def UsersData(user):
    if user not in available_users():
        try:
            get_info(user)
        except:
            print("\n[⨯] Error: No results found. (cookie*)")
            messages({"method": "set", "message": "Error: No results found. cookie* ","type":"alert", "percentage":0})
            return 
    messages({"method": "set", "message": f"{user}... ","type":"alert", "percentage":0})
    file = open(f'static/data/{user}.json')
    Data = json.load(file)
    file.close()
    return Data


def load_images(username):
    userData = UsersData(username)
    total = len(userData['followers']) + len(userData['following'])
    progress = 0
    for user in userData['followers']:
        print(f"\r > Get {progress} of {total} images... {(100*(progress/total)):.2f}%", " "*20, end="")
        messages({"method": "set", "message": f"Get {progress} of {total} images...","type":"load", "percentage": (progress/total)})
        user['profile_pic_base64'] = get_image_base64(user['profile_pic_url'])
        progress +=1

    for user in userData['following']:
        print(f"\r > Get {progress} of {total} images... {(100*(progress/total)):.2f}%", " "*20, end="")
        messages({"method": "set", "message": f"Get {progress} of {total} images...","type":"load", "percentage": (progress/total)})
        user['profile_pic_base64'] = get_image_base64(user['profile_pic_url'])
        progress +=1
        
    save_userData(userData, username)
def find_image(url, username):
    userData = UsersData(username)
    try:
        userData['followers'][0]['profile_pic_base64']
    except:
        load_images(username)
    messages({"method": "set", "message": "Find image...","type":"alert", "percentage":1})
    for user in userData['followers']:
        if user['profile_pic_url'] == url:
            try:
                return user['profile_pic_base64']
            except:
                user['profile_pic_base64'] = get_image_base64(url)
                return user['profile_pic_base64']
    for user in userData['following']:
        if user['profile_pic_url'] == url:
            try:
                return user['profile_pic_base64']
            except:
                user['profile_pic_base64'] = get_image_base64(url)
                return user['profile_pic_base64']


def post_image(url):
    messages({"method": "set", "message": "Posts... ","type":"alert", "percentage":0})
    return get_image_base64(url)

def get_messages():
    return messages({"method": ""})

def clear_data():
    users = available_users()
    messages({"method": "set", "message": f"Data Was Deleted successfully({len(users)}).","type":"load", "percentage":1})
    for user in users:
        os.remove(f"static/data/{user}.json")
    return

#print(UsersData('khaled_aitmiloud')["username"])
