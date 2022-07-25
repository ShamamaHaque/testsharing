from select import select
from flask import Flask, jsonify,render_template
from requests import request
import mysql.connector
import requests
from flask import request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
# cnx = mysql.connector.connect(user='root', database='geidea_database',password="root")
#  "159.223.192.8:3306", "checking", "checking123"

cnx = mysql.connector.connect(host="67.205.163.34",user="sohail",password="sohail123", database='geidea_portal',)

'''If everything works fine you will get a
message that Flask is working on the first
page of the application
'''
 
# @app.route('/teamleaderlist',methods = ['POST', 'GET'])
# def get_teamLeaderList():
#     print("helloww")

#     return render_template('geidea-master/tables/teamLeaderList.html')
    




# @app.route('/update_assign_teamleader_on_zone')
# def update_assign_teamLeader_on_zone():
#     cursor = cnx.cursor()
#     query = ("select teamLeaderName,zones.zoneName,cities.cityName,regionName from teamleaders inner join zones on teamleaders.teamLeaderID=zones.teamLeaderID inner join cities on zones.cityID=cities.cityID inner join regions on cities.regionID=regions.regionID")
#     cursor.execute(query)
#     data=[]
#     for i,j,k,l in cursor:
#         data.append({"teamLeaderName":i,"zoneName":j,"cityName":k,"regionName":l})
#     cursor.close()
#     return data.json()



# @app.route('/teamleaderlist_TabularData_API')
# def get_teamLeader_tabulardata_api():
#     cursor = cnx.cursor()
#     query = ("select teamLeaderName,zones.zoneName,cities.cityName,regionName from teamleaders inner join zones on teamleaders.teamLeaderID=zones.teamLeaderID inner join cities on zones.cityID=cities.cityID inner join regions on cities.regionID=regions.regionID")
#     cursor.execute(query)
#     data=[]
#     for i,j,k,l in cursor:
#         data.append({"teamLeaderName":i,"zoneName":j,"cityName":k,"regionName":l})
#     cursor.close()
#     return jsonify(data)



############################# HOW TO USE URLS #########################################
####### Example:   localhost:5000/teamleaderlist_TabularData_API ######################
####### In this case if we request the above URL we may get data to fill the table on temaleaderlist page #########




################################################################################################
################################## TeamLeaderList API URLs #####################################
################################################################################################


## Returns data to fill the table on teamleaderlist page ## --> METHOD = GET
@app.route('/teamleaderlist_TabularData_API')
def get_teamLeader():
    cursor = cnx.cursor()
    query = ("select teamLeaderName,zones.zoneName,cities.cityName,regionName from teamleaders inner join zones on teamleaders.teamLeaderID=zones.teamLeaderID inner join cities on zones.cityID=cities.cityID inner join regions on cities.regionID=regions.regionID")
    cursor.execute(query)
    data=[]
    for i,j,k,l in cursor:
        data.append({"teamLeaderName":i,"zoneName":j,"cityName":k,"regionName":l})
    cursor.close()
    return jsonify(data)



## Returns list of teamleaders ## --> METHOD = GET
@app.route('/get_all_teamleaderslist')
def get_all_teamleaderslist():
    cursor = cnx.cursor()
    query = ("select teamLeaderID,teamLeaderName from teamleaders")
    cursor.execute(query)
    data=[]
    for i,j in cursor:
        data.append({"teamLeaderID":i,"teamLeaderName":j})
    cursor.close()
    return jsonify(data)


## Returns list of all regions ## --> METHOD = GET
@app.route('/get_all_region_list')
def get_all_regions():
    cursor = cnx.cursor()
    query = ("select regionID,regionName from regions")
    cursor.execute(query)
    data=[]
    for i,j in cursor:
        data.append({"regionID":i,"regionName":j})
    cursor.close()
    return jsonify(data)



## Returns list of all zones in a city if 'cityId' is provided in URL ## --> METHOD = GET
        #Exmple:   "localhost:5000/get_all_zones_in_city/3"   #where 3 represents cityId
@app.route('/get_all_zones_in_city/<int:cityID>')
def get_all_cities_in_region(cityID):
    cursor = cnx.cursor()
    query = ("select zoneID,zoneName from zones where cityID={}".format(cityID))
    cursor.execute(query)
    data=[]
    for i,j in cursor:
        data.append({"zoneID":i,"zoneName":j,"cityID":cityID})
    cursor.close()
    return jsonify(data)




## Returns List of all cities in a region if 'regionId' is provided in URL ## --> METHOD = GET
        #Exmple:   "localhost:5000/get_all_cities_in_region/2"    #where 2 represents regionId #
@app.route('/get_all_cities_in_region/<int:regionID>')
def get_all_zones_in_city(regionID):
    cursor = cnx.cursor()
    query = ("select cityID,cityName from cities where regionID={}".format(regionID))
    cursor.execute(query)
    data=[]
    for i,j in cursor:
        data.append({"cityID":i,"cityName":j,"regionID":regionID})
    cursor.close()
    return jsonify(data)

# @app.route('/salelist')
# def get_saleList():   
#     return render_template('geidea-master/tables/saleList.html')

# @app.route('/addLocationTable')
# def get_addLocationTable():
#     return render_template('geidea-master/tables/addLocationTable.html')

# @app.route('/technician')
# def get_technician():
    # cursor = cnx.cursor()

    # query = ("SELECT techname,TechnicianID,RegionID,CityID,SubZoneID FROM technician")
    # cursor.execute(query)

    # techname=[]
    # technicianid=[]
    # zoneid=[]
    # regionid=[]
    # cityid=[]
    # subzoneid=[]
    # regionname=[]
    # cityname=[]
    # zonename=[]
    # subzonename=[]

    # for (name,id,i,j,l) in cursor:

    #     techname.append(name)
    #     technicianid.append(id)
    #     regionid.append(i)
    #     cityid.append(j)
    #     subzoneid.append(l)
        

    
    #     # print(zone_ids)

    # num_of_records=len(technicianid)
    #     # print(type(i))
    # cursor.close()
    # for i in subzoneid:
    #     cursor = cnx.cursor()
    #     query = ("SELECT ZoneID FROM SubZone where SubZoneID={} ".format(i))
    #     cursor.execute(query)
    #     for j in cursor:
    #         zoneid.append(j)
    #     cursor.close()

    # for i in regionid:
    #     cursor = cnx.cursor()
    #     query = ("SELECT RegionName FROM region where RegionID={} ".format(i))
    #     cursor.execute(query)
    #     for j in cursor:
    #         regionname.append(j)
    #     cursor.close()
    # for i in cityid:
    #     cursor = cnx.cursor()
    #     query = ("SELECT CityName FROM city where CityID={} ".format(i))
    #     cursor.execute(query)
    #     for j in cursor:
    #         cityname.append(j)
    #     cursor.close()
    # # for i in zoneid:
    # #     cursor = cnx.cursor()
    # #     query = ("SELECT ZoneName FROM zones where ZoneID={} ".format(i[0]))
    # #     cursor.execute(query)
    # #     for j in cursor:
    # #         zonename.append(j)
    # #     cursor.close()
    # for i in subzoneid:
    #     cursor = cnx.cursor()
    #     query = ("SELECT Name FROM subzone where SubZoneID={} ".format(i))
    #     cursor.execute(query)
    #     for j in cursor:
    #         subzonename.append(j)
    #     cursor.close()
    # cnx.close()
    # num_of_records,techname=techname,regionname=regionname,cityname=cityname,zonename=zonename,subzonename=subzonename
    return render_template('geidea-master/tables/technician.html')
 




# @app.route('/technicianlist')
# def get_technicianList():
#     return render_template('Geidea-master/tables/technicianList.html')


if __name__ == '__main__':
    app.run(debug=True,port=1113)